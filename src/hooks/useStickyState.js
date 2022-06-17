import { useEffect, useState } from "react";

/**
 * Torna o state escolhido em uma proprieade persistente via Local Storage
 *
 * @param {*} defaultValue Valor padrão para inicializar o state
 * @param {String} key Chave que será inserida no localStorage
 * @returns {Array} Retorna uma função para definir o valor e o proprio valor do estado
 */
function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useStickyState;
