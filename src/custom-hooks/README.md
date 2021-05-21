# useForm

Ejemplo:

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [values,handleInputChange,reset ] = useForm( initialForm );

```
# useFetch

Ejemplo:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```
# useCounter Hook


Ejemplo de uso:
```
    const { counter, increment, decrement, reset } = useCounter(10);
```

useCounter() // recibe un valor por defecto