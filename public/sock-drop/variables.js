var basket = $('#basket'),
    container = $('main'),
    socks = $('.sock'),
    sock1 = $('#sock1'),
    sock2 = $('#sock2'),
    sock3 = $('#sock3'),
    pickles = $('.pickle'),
    pickle1 = $('#pickle1'),
    pickle2 = $('#pickle2'),
    pickle3 = $('#pickle3'),
    leafs = $('.leaf'),
    leaf1 = $('#leaf1'),
    leaf2 = $('#leaf2'),
    leaf3 = $('#leaf3'),
    restart = $('#restart'),
    score_span = $('#score'),
    pickle_score_span = $('#pickle_score'),
    high_span = $('#high'),
    floor = $('#floor'),
    konami = $('#konami')
    basket_height = basket.height(),
    container_height = container.height(),
    sock_height = socks.height(),
    sock_initial_position = parseInt(socks.css('top')),
    pickle_height = pickles.height(),
    pickle_initial_position = parseInt(pickles.css('top')),
    leaf_height = leafs.height(),
    leaf_initial_position = parseInt(leafs.css('top')),
    score = 0,
    pickle_score = 0,
    high = 0,
    speed = 3,
    max_speed = 10,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    sock_current_position = 0,
    sock_top = 0,
    pickle_current_position = 0,
    pickle_top = 0,
    leaf_current_position = 0,
    leaf_top = 0,
    basket_top = container_height - basket_height,
    bullseye_num = 0;
high_span.text(high);