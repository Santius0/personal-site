// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
    {
      title: 'C#',
      competency: 2,
      category: ['Programming Languages', 'C#'],
    },
  {
      title: 'Java',
      competency: 4,
      category: ['Programming Languages', 'Java'],
  },
  {
      title: 'C',
      competency: 5,
      category: ['Programming Languages', 'C'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Programming Languages', 'C++'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python', 'Scripting'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Programming Languages', 'Javascript'],
  },
  {
    title: 'Django',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Ionic',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Laravel',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Programming Languages', 'Scripting'],
  },
  {
    title: 'PHP',
    competency: 4,
    category: ['Programming Languages', 'PHP'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['OS'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['OS'],
  },
  {
    title: 'Unreal Engine',
    competency: 2,
    category: ['C++', 'Game Engine'],
  },
  {
    title: 'Unity',
    competency: 2,
    category: ['C#', 'Game Engine'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
