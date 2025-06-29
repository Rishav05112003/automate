'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
  onUpload: (url: string) => any
  label?: string
}

const UploadImageButton = ({ onUpload, label = "Upload Image" }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await res.json()

      if (data.secure_url) {
        await onUpload(data.secure_url)
      } else {
        console.error('Upload failed:', data)
      }
    } catch (err) {
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="bg-white text-black hover:bg-gray-200"
      >
        {uploading ? <><Loader2 className="animate-spin mr-2" /> Uploading...</> : label}
      </Button>
    </div>
  )
}

export default UploadImageButton