import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react'; // Import Lucide spinner icon

const ProjectsSection = () => {
  interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string; // Repository URL
    homepage: string; // Deployed website URL
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/antosnizzah/repos');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* Loading Spinner */}
          <Loader className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => project.homepage) // Only show projects with a deployed website
            .map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description ? project.description : 'No description available.'}
                </p>
                {project.homepage ? (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    View Deployed Website
                  </a>
                ) : (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
