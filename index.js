import chalk from "chalk";
import { input, select, Separator } from "@inquirer/prompts";
import {
  getActivity,
  getEvents,
  getFollowers,
  getFollowing,
  getGists,
  getRepos,
  getUser,
} from "./actions.js";



const main = async () => {
  const username = await input({ message: "Enter your username" });

  const action = await select({
    message: `Qué deseas obtener de ${username}`,
    choices: [
      {
        name: "Perfil",
        value: "profile",
        description: "Obtener información del perfil",
      },
      {
        name: "Actividad",
        value: "activity",
        description: "Ver actividad reciente",
      },
      new Separator(),
      {
        name: "Repositorios Públicos",
        value: "repos",
        description: "Listar repositorios públicos",
      },
      {
        name: "Seguidores",
        value: "followers",
        description: "Ver lista de seguidores",
      },
      {
        name: "Seguidos",
        value: "following",
        description: "Ver lista de seguidos",
      },
      new Separator(),
      {
        name: "Gists Públicos",
        value: "gists",
        description: "Ver gists públicos",
      },
      {
        name: "Eventos",
        value: "events",
        description: "Ver eventos recientes",
      },
    ],
  });

  switch (action) {
    case "profile":
      await getUser(username);
      break;
    case "activity":
      await getActivity(username);
      break;
    case "repos":
      await getRepos(username);
      break;
    case "followers":
      await getFollowers(username);
      break;
    case "following":
      await getFollowing(username);
      break;
    case "gists":
      await getGists(username);
      break;
    case "events":
      await getEvents(username);
      break;
    default:
      console.log(chalk.red("Opción no reconocida"));
  }
};

main();

