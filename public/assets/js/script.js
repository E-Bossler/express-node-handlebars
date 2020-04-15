// alert('hello');

$('#submitBurger').click(
    function (e) {
        e.preventDefault();
        const newBurger = $('#burger').val().trim();
        console.log(newBurger);
        $.ajax(
            {
                url: '/api/burgers/add',
                method: 'POST',
                data: {
                    burger_name: newBurger
                }
            }
        ).then(
            results => {
                location.reload();
            }
        )
    }
);

$('.burgerEatButton').click(
    function(e) {
        e.preventDefault();
        const id = $(this).data('id')
        console.log(id)
        $.ajax(
            {
                url: `/api/burgers/${id}`,
                method: 'PUT',
            }
        ).then(
            results => {
                console.log(results);
                location.reload();
            }
        )
    }
)