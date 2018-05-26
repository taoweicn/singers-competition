export function setLocal(name, content) {
  if (!name && typeof name !== 'string' && !content) return;
  localStorage.setItem(name, JSON.stringify(content));
}

export function getLocal(name) {
  if (!name && typeof name !== 'string') return null;
  return JSON.parse(localStorage.getItem(name));
}

export function removeLocal(name) {
  if (!name && typeof name !== 'string') return;
  localStorage.removeItem(name);
}

export function setSession(name, content) {
  if (!name && typeof name !== 'string' && !content) return;
  sessionStorage.setItem(name, JSON.stringify(content));
}

export function getSession(name) {
  if (!name && typeof name !== 'string') return null;
  return JSON.parse(sessionStorage.getItem(name));
}

export function removeSession(name) {
  if (!name && typeof name !== 'string') return;
  sessionStorage.removeItem(name);
}
