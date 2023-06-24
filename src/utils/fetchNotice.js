import axios from "axios";
export async function fetchAllNotice() {
  const res = await fetch(`http://127.0.0.1:1337/api/notices?populate=*`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data;
}

export async function fetchNotice(slug) {
  const res = await fetch(`http://127.0.0.1:1337/api/notices/${slug}?populate=*`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data;
}
