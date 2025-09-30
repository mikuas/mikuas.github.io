// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "PySide6-Fluent-UI-Project",
		title: "PySide6-Fluent-UI",
		description:
			"这是一个基于PySide6和PySide6-Fluent-Widgets的项目",
		image: "",
		category: "desktop",
		techStack: ["Python", "PySide6", "Qt"],
		status: "in-progress",
		liveDemo: "https://www.github.com/mikuas/PySide6-Fluent-UI.git",
		sourceCode: "https://www.github.com/mikuas/PySide6-Fluent-UI.git",
		startDate: "2024-11-6",
		featured: true,
		tags: ["PySide6", "PySide6", "Qt"]
	},

];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};

export const openUrl = (projectID: string) => {
	const project = projectsData.find((p) => p.id === projectID);
	if (project && project.liveDemo) {
		window.opener(project.liveDemo, "_blank");
	}
}