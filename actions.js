import axios from "axios";
import ora from "ora";
import chalk from "chalk";

const query = axios.create({
  baseURL: "https://api.github.com/",
});

export const getRepos = async (user) => {
  const spinner = ora(chalk.green(" Cargando repositorios públicos")).start();
  try {
    const res = await query.get(`users/${user}/repos`);
    spinner.text = "OK";
    spinner.succeed();

    res.data.forEach((repo, index) => {
      console.log(
        `${chalk.yellow(`Repositorio ${index + 1}:`)} ${repo.name} - ${
          repo.stargazers_count
        } estrellas`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("Ha ocurrido un error al obtener los repositorios."));
  } finally {
    spinner.stop();
  }
};

export const getUser = async (user) => {
  const spinner = ora(chalk.green(" Cargando")).start();
  try {
    const res = await query.get(`users/${user}`);
    spinner.text = "OK";
    spinner.succeed();
    console.log(res.data);
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("A ocurrido un error "));
  } finally {
    spinner.stop();
  }
};

export const getActivity = async (user) => {
  const spinner = ora(chalk.green(" Cargando actividad reciente")).start();
  try {
    const res = await query.get(`users/${user}/events`);
    spinner.text = "OK";
    spinner.succeed();

    if (res.data?.length === 0) {
      console.log(`${chalk.blue(`No se encontró información`)}`);
      return;
    }

    res.data.forEach((event, index) => {
      console.log(
        `${chalk.blue(`Evento ${index + 1}:`)} ${event.type} en ${
          event.repo.name
        }`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("Ha ocurrido un error al obtener la actividad."));
  } finally {
    spinner.stop();
  }
};

export const getFollowers = async (user) => {
  const spinner = ora(chalk.green(" Cargando seguidores")).start();
  try {
    const res = await query.get(`users/${user}/followers`);
    spinner.text = "OK";
    spinner.succeed();

    if (res.data?.length === 0) {
      console.log(`${chalk.blue(`No se encontró seguidores`)}`);
      return;
    }

    res.data.forEach((follower, index) => {
      console.log(
        `${chalk.magenta(`Seguidor ${index + 1}:`)} ${follower.login}`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("Ha ocurrido un error al obtener los seguidores."));
  } finally {
    spinner.stop();
  }
};

export const getFollowing = async (user) => {
  const spinner = ora(chalk.green(" Cargando seguidos")).start();
  try {
    const res = await query.get(`users/${user}/following`);
    spinner.text = "OK";
    spinner.succeed();

    if (res.data?.length === 0) {
      console.log(`${chalk.blue(`No se encontró usuarios seguidos`)}`);
      return;
    }

    res.data.forEach((followed, index) => {
      console.log(
        `${chalk.cyan(`Seguido ${index + 1} por :`)} ${followed.login}`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(
      chalk.red("Ha ocurrido un error al obtener la lista de seguidos.")
    );
  } finally {
    spinner.stop();
  }
};

export const getGists = async (user) => {
  const spinner = ora(chalk.green(" Cargando gists públicos")).start();
  try {
    const res = await query.get(`users/${user}/gists`);
    spinner.text = "OK";
    spinner.succeed();

    if (res.data?.length === 0) {
      console.log(`${chalk.blue(`No se encontró información`)}`);
      return;
    }

    res.data.forEach((gist, index) => {
      console.log(
        `${chalk.gray(`Gist ${index + 1}:`)} ${
          gist.description || "Sin descripción"
        } - ${gist.html_url}`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("Ha ocurrido un error al obtener los gists."));
  } finally {
    spinner.stop();
  }
};

export const getEvents = async (user) => {
  const spinner = ora(chalk.green(" Cargando eventos recientes")).start();
  try {
    const res = await query.get(`users/${user}/events`);
    spinner.text = "OK";
    spinner.succeed();

    if (res.data?.length === 0) {
      console.log(`${chalk.blue(`No se encontró información`)}`);
      return;
    }

    res.data.forEach((event, index) => {
      console.log(
        `${chalk.blue(`Evento ${index + 1}:`)} ${event.type} en ${
          event.repo.name
        }`
      );
    });
  } catch (error) {
    spinner.text = chalk.red(" Fallo ");
    spinner.fail();
    console.log(chalk.red("Ha ocurrido un error al obtener los eventos."));
  } finally {
    spinner.stop();
  }
};
