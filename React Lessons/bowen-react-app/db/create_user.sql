insert into users (
    firstname, 
    lastname,
    state
)

values
($1, $2, $3)
returning *;