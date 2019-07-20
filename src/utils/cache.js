export function setLocal(name, content) {
  if (typeof name !== 'string' || !name || content == null) return;
  localStorage.setItem(name, JSON.stringify(content));
}

export function getLocal(name) {
  if (typeof name !== 'string' || !name) return null;
  return JSON.parse(localStorage.getItem(name));
}

export function removeLocal(name) {
  if (typeof name !== 'string' || !name) return;
  localStorage.removeItem(name);
}

export function setSession(name, content) {
  if (typeof name !== 'string' || !name || content == null) return;
  sessionStorage.setItem(name, JSON.stringify(content));
}

export function getSession(name) {
  if (typeof name !== 'string' || !name) return null;
  return JSON.parse(sessionStorage.getItem(name));
}

export function removeSession(name) {
  if (typeof name !== 'string' || !name) return;
  sessionStorage.removeItem(name);
}
