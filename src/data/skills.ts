// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description: "现代JavaScript开发",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: [],
		color: "#F7DF1E",
	},
	{
		id: "python",
		name: "Python",
		description: "基础Python开发, PySide6软件开发",
		icon: "logos:python",
		category: "other",
		level: "expert",
		experience: { years: 1, months: 10 },
		projects: ["PySide6-Fluent-UI"],
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "基础Java开发",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: [],
		color: "#ED8B00",
	},
	{
		id: "csharp",
		name: "C#",
		description: "基础C#开发",
		icon: "devicon:csharp",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		color: "#e178ff",
	},
	{
		id: "mysql",
		name: "MySQL",
		description: "会增删改查",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		color: "#4479A1",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
