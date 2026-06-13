const db = supabase.createClient(
  'https://jxqojqsyanhgkyjquhxn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4cW9qcXN5YW5oZ2t5anF1aHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwODM4NTcsImV4cCI6MjA5NjY1OTg1N30.W6UGitKyLFPWTqPt5qpIgPWNW-D6KlfpPO8qz0LQim8'
);

async function requireAuth() {
  const { data } = await db.auth.getSession();
  if (!data.session) {
    location.href = 'index.html';
    return null;
  }
  return data.session.user;
}

function getCurrentGroup() {
  const g = localStorage.getItem('currentGroup');
  return g ? JSON.parse(g) : null;
}

function setCurrentGroup(group) {
  localStorage.setItem('currentGroup', JSON.stringify(group));
}
