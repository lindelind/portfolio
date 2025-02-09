
 type ProjectsListProps = {
   deviceType: string;
 };

 const projects = [
   { title: "HittaVet - Examensarbete", href: "#" },
   { title: "Weather App (Using Weatherbit API)", href: "#" },
   { title: "E-commerce with Stripe", href: "#" },
   { title: "Subscription Newsletter App", href: "#" },
   { title: "Image Search (Using Google Image API)", href: "#" },
 ];

 export const ProjectsList: React.FC<ProjectsListProps> = () => {
   return (
     <ul>
       {projects.map((project) => (
         <li key={project.title}>
           <a href={project.href}>{project.title}</a>
         </li>
       ))}
     </ul>
   );
 };