/*
¿Qué tareas se consideran macrotareas y cuáles son microtareas?
    Macrotareas los setTimeout, y microtareas las promesas

¿Cómo se relacionan las macrotareas y microtareas con el event loop?
    El event loop primero verifica y ejecuta las microtareas y despues las macrotareas.

¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
    Se envia la macrotarea a la fila de macrotareas, y primero se ejecutan las mas antiguas, es decir las que ingresaron primero a la fila

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
    promesas enviadas a la fila de microtareas, y setTimeout a la de macrotareas
*/
