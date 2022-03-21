$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});


// TOUCH
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
function touchHandler(e) {
    if(e.touches) {
        basket.css('left', e.pageX);
    }
}


function sock_down(sock) {
    sock_current_position = parseInt(sock.css('top'));
    sock.css('top', sock_current_position + speed);
}

function check_sock_hits_floor(sock) {
    if (collision(sock, floor)) {
        show_bulls_eye(sock);
        // increment_high();
        return true;
    }
    return false;
}

function set_sock_to_initial_position(sock) {
    sock.css('top', sock_initial_position);
}

function show_bulls_eye(sock) {
    bullseye_num = sock.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_sock_hits_basket(sock) {
    if (collision(sock, basket)) {
        sock_top = parseInt(sock.css('top'));
        if (sock_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}





function pickle_down(pickle) {
    pickle_current_position = parseInt(pickle.css('top'));
    pickle.css('top', pickle_current_position + speed);
}

function check_pickle_hits_floor(pickle) {
    if (collision(pickle, floor)) {
        show_bulls_eye(pickle);
        // increment_high();
        return true;
    }
    return false;
}

function set_pickle_to_initial_position(pickle) {
    pickle.css('top', pickle_initial_position);
}

function show_bulls_eye(pickle) {
    bullseye_num = pickle.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_pickle_hits_basket(pickle) {
    if (collision(pickle, basket)) {
        pickle_top = parseInt(pickle.css('top'));
        if (pickle_top < basket_top) {
            update_pickle_score();
            return true;
        }
    }
    return false;
}





function leaf_down(leaf) {
    leaf_current_position = parseInt(leaf.css('top'));
    leaf.css('top', leaf_current_position + speed);
}

function check_leaf_hits_floor(leaf) {
    if (collision(leaf, floor)) {
        show_bulls_eye(leaf);
        // increment_high();
        return true;
    }
    return false;
}

function set_leaf_to_initial_position(leaf) {
    leaf.css('top', leaf_initial_position);
}

function show_bulls_eye(leaf) {
    bullseye_num = leaf.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_leaf_hits_basket(leaf) {
    if (collision(leaf, basket)) {
        increment_high();
        leaf_top = parseInt(leaf.css('top'));
        if (leaf_top < basket_top) {
            // update_score();
            return true;
        }
    }
    return false;
}






function increment_high() {
    high++;
    high_span.text(high);
}

function update_score() {
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    } 
    // if (score > 1000) {
    //     score++;
    //     score_span.text(score + 1000);
    // } else if (score < 1000){
    //     score++
    //     score_span.text(score);
    //     // score_span.text(score + 1000);
    // }
    if (score < 1000) {
        score++;
        score_span.text(score);
    } else {
        // score+=1000;
        score++;
        // score=score + 1000;
        score_span.text(score);
    }
}

function update_pickle_score() {
    pickle_score++;
    pickle_score_span.text(pickle_score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});