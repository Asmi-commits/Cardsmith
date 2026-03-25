import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from './constants';

export function validateFile(file) {
  const errors = [];

  if (!file) {
    errors.push('No file selected.');
    return { valid: false, errors };
  }

  if (file.size > MAX_FILE_SIZE) {
    errors.push(`File size exceeds 10MB limit. Current size: ${(file.size / 1024 / 1024).toFixed(1)}MB`);
  }

  if (!Object.keys(ACCEPTED_FILE_TYPES).includes(file.type)) {
    errors.push(`Unsupported file type. Accepted: PDF, TXT, DOCX, PNG, JPG`);
  }

  return { valid: errors.length === 0, errors };
}

export function getFileIcon(type) {
  if (type.includes('pdf')) return 'FileText';
  if (type.includes('image')) return 'Image';
  if (type.includes('text')) return 'FileType';
  if (type.includes('word') || type.includes('document')) return 'FileText';
  return 'File';
}

export function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}