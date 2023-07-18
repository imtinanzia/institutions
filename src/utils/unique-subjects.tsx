const extractUniqueSubjects = <T extends { subjects: { name: string }[] }>(
  array: T[]
): string[] => {
  const subjects: string[] = [];

  array.forEach((item: T) => {
    item.subjects.forEach((subject) => {
      if (!subjects.includes(subject.name)) {
        subjects.push(subject.name);
      }
    });
  });

  return subjects;
};

export default extractUniqueSubjects;
