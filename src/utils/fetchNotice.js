console.log(process.env.NEXT_PUBLIC_BASE_URL);
export async function fetchAllNotice() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notices?populate=*`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data;
}

export async function fetchNotice(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notices/${slug}?populate=*`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data;
}
