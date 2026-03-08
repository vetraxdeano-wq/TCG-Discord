const { createClient } = window.supabase

const db = createClient(
  'https://ndsnbvvcbkblkncvoroc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kc25idnZjYmtibGtuY3Zvcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjczMTksImV4cCI6MjA4ODU0MzMxOX0.mMsaBIrDI3BIoeTFBsCXo2AbuBLRnzqk625fKRkYCtM'
)
