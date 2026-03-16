import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Filter,
  FileText,
  Download,
  Trash2,
  Edit,
  Plus,
  Eye,
  BookOpen,
  Calendar,
  ArrowLeft,
  File,
  FileSpreadsheet,
  FileImage,
  FileVideo,
  MoreVertical,
} from 'lucide-react'
import { useUploads } from '../../hooks/useUploads'
import { useCourses } from '../../hooks/useCourses'
import toast from 'react-hot-toast'

/**
 * ManageMaterials Page
 * 
 * Allows teachers to view, manage, and organize uploaded materials.
 * Provides options to edit, delete, and view download statistics.
 */
const ManageMaterials = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('all')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [materialToDelete, setMaterialToDelete] = useState(null)

  const { myUploads, isLoadingMyUploads, deleteMaterial, isDeleting, downloadFile } = useUploads()
  const { myCourses, isLoadingMyCourses } = useCourses()

  const uploads = myUploads || []

  // Filter uploads
  const filteredUploads = uploads.filter((upload) => {
    const matchesSearch = upload.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    
    if (selectedCourse === 'all') return matchesSearch
    return matchesSearch && upload.course?._id === selectedCourse
  })

  // Get file icon
  const getFileIcon = (fileType) => {
    if (fileType?.includes('pdf')) return FileText
    if (fileType?.includes('spreadsheet') || fileType?.includes('excel')) return FileSpreadsheet
    if (fileType?.includes('image')) return FileImage
    if (fileType?.includes('video')) return FileVideo
    return File
  }

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Handle delete
  const handleDeleteClick = (material) => {
    setMaterialToDelete(material)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    if (materialToDelete) {
      deleteMaterial(materialToDelete._id, {
        onSuccess: () => {
          toast.success('Material deleted successfully')
          setShowDeleteModal(false)
          setMaterialToDelete(null)
        },
      })
    }
  }

  // Calculate stats
  const totalUploads = uploads.length
  const totalDownloads = uploads.reduce((acc, u) => acc + (u.downloadCount || 0), 0)
  const totalSize = uploads.reduce((acc, u) => acc + (u.fileSize || 0), 0)

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/teacher/dashboard"
            className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-secondary-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Manage Materials</h1>
            <p className="text-secondary-600">
              Organize and manage your course materials
            </p>
          </div>
        </div>
        <Link to="/teacher/upload-notes" className="btn-primary">
          <Plus className="w-4 h-4" />
          Upload New
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900">{totalUploads}</p>
              <p className="text-sm text-secondary-500">Total Uploads</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900">{totalDownloads}</p>
              <p className="text-sm text-secondary-500">Total Downloads</p>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900">
                {formatFileSize(totalSize)}
              </p>
              <p className="text-sm text-secondary-500">Total Size</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-secondary-400" />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="input py-2 min-w-[200px]"
              disabled={isLoadingMyCourses}
            >
              <option value="all">All Courses</option>
              {myCourses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Materials List */}
      {isLoadingMyUploads ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="card h-24 animate-pulse">
              <div className="h-full bg-secondary-100" />
            </div>
          ))}
        </div>
      ) : filteredUploads.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-10 h-10 text-secondary-400" />
          </div>
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">
            {searchQuery || selectedCourse !== 'all' ? 'No materials found' : 'No uploads yet'}
          </h3>
          <p className="text-secondary-600 mb-6 max-w-md mx-auto">
            {searchQuery || selectedCourse !== 'all'
              ? 'Try adjusting your search criteria'
              : 'Start uploading materials for your courses'}
          </p>
          {!searchQuery && selectedCourse === 'all' && (
            <Link to="/teacher/upload-notes" className="btn-primary">
              <Plus className="w-4 h-4" />
              Upload Materials
            </Link>
          )}
        </div>
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50 border-b border-secondary-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-secondary-700">
                    Material
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-secondary-700">
                    Course
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-secondary-700">
                    Uploaded
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-secondary-700">
                    Downloads
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-secondary-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                {filteredUploads.map((upload) => {
                  const FileIcon = getFileIcon(upload.fileType)
                  return (
                    <tr key={upload._id} className="hover:bg-secondary-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <FileIcon className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-secondary-900">
                              {upload.title}
                            </p>
                            <p className="text-xs text-secondary-500">
                              {formatFileSize(upload.fileSize)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-secondary-400" />
                          <span className="text-sm text-secondary-700">
                            {upload.course?.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-secondary-400" />
                          <span className="text-sm text-secondary-700">
                            {new Date(upload.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4 text-secondary-400" />
                          <span className="text-sm text-secondary-700">
                            {upload.downloadCount || 0}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => downloadFile(upload)}
                            className="p-2 hover:bg-primary-100 rounded-lg text-primary-600 transition-colors"
                            title="Download"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(upload)}
                            className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Delete Material?
              </h3>
              <p className="text-secondary-600 mb-6">
                Are you sure you want to delete "{materialToDelete?.title}"? 
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="flex-1 btn-danger"
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageMaterials
