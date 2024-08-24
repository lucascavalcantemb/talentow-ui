export function formatInitials(name: string) {
  const nameParts = name.split(/(\s+)/);

  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  if (nameParts.length > 1) {
    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  }
  return '';
}
