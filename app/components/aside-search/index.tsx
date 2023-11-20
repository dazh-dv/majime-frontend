import { redirect } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";
import { listGenders, listStatus, listTypes } from "@/data/categorys";
import CheckboxGender from "./checkbox-gender";

export default function AsideSearch() {
  const submitHandle = async (formData: FormData) => {
    "use server";
    const selectedInputNames = ["gender", "status", "type", "hentai"];
    //filtra informacion de formData para solo selecionar los datos necesarios
    const filteredData = Array.from(formData.entries()).filter(([name]) =>
      selectedInputNames.includes(name)
    );

    // convertir array de informacion a queryString
    const asString = filteredData
      .map(([name, value]) => {
        if (value instanceof File) {
          return null;
        }
        return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      })
      .filter((entry) => entry !== null)
      .join("&");
    redirect(`/series?${asString}`);
  };

  return (
    <aside className={styles.aside}>
      <div>
        <h2>Filtrar Lista por</h2>
        <form action={submitHandle}>
          <div className={styles.input_search}>
            <input
              name="query"
              type="text"
              autoComplete="false"
              placeholder="Busca tu Serie"
            />
            <MagnifyingGlassIcon />
          </div>
          <div className={styles.container_sec}>
            <h3>Generos</h3>
            <ul>
              {listGenders.map((gender) => (
                <CheckboxGender key={gender.value} gender={gender} />
              ))}
            </ul>
          </div>
          <div className={styles.container_extra_sec}>
            <div className={styles.container_sec}>
              <h3>Tipo</h3>
              <ul>
                {listTypes.map((type) => (
                  <li key={type.value} className={styles.checkbox_extra}>
                    <input
                      id={`type-${type.value}`}
                      type="radio"
                      name="type"
                      value={type.value}
                    />
                    <label htmlFor={`type-${type.value}`}>{type.name}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.container_sec}>
              <h3>Estatus</h3>
              <ul>
                {listStatus.map((status) => (
                  <li key={status.value} className={styles.checkbox_extra}>
                    <input
                      id={`status-${status.value}`}
                      type="radio"
                      name="status"
                      value={status.value}
                    />
                    <label htmlFor={`status-${status.value}`}>
                      {status.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.container_sec}>
              <h3>Extra</h3>
              <ul>
                <li className={styles.checkbox_extra}>
                  <input
                    id="hentai"
                    type="checkbox"
                    name="hentai"
                    value="true"
                  />
                  <label htmlFor="hentai">+18</label>
                </li>
              </ul>
            </div>
          </div>
          <button className={styles.button_filter} type="submit">
            Filtrar
          </button>
        </form>
      </div>
    </aside>
  );
}
