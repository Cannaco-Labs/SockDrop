$(function () {
    the_game = function () {



        if (check_sock_hits_floor(sock1) || check_sock_hits_basket(sock1)) {
            set_sock_to_initial_position(sock1);
        } else {
            sock_down(sock1);
        }

        if (check_sock_hits_floor(sock2) || check_sock_hits_basket(sock2)) {
            set_sock_to_initial_position(sock2);
        } else {
            sock_down(sock2);
        }

        if (check_sock_hits_floor(sock3) || check_sock_hits_basket(sock3)) {
            set_sock_to_initial_position(sock3);
        } else {
            sock_down(sock3);
        }


        if (check_pickle_hits_floor(pickle1) || check_pickle_hits_basket(pickle1)) {
            set_pickle_to_initial_position(pickle1);
        } else {
            pickle_down(pickle1);
        }

        if (check_pickle_hits_floor(pickle2) || check_pickle_hits_basket(pickle2)) {
            set_pickle_to_initial_position(pickle2);
        } else {
            pickle_down(pickle2);
        }

        if (check_pickle_hits_floor(pickle3) || check_pickle_hits_basket(pickle3)) {
            set_pickle_to_initial_position(pickle3);
        } else {
            pickle_down(pickle3);
        }



        if (check_leaf_hits_floor(leaf1) || check_leaf_hits_basket(leaf1)) {
            set_leaf_to_initial_position(leaf1);
        } else {
            leaf_down(leaf1);
        }

        if (check_leaf_hits_floor(leaf2) || check_leaf_hits_basket(leaf2)) {
            set_leaf_to_initial_position(leaf2);
        } else {
            leaf_down(leaf2);
        }

        if (check_leaf_hits_floor(leaf3) || check_leaf_hits_basket(leaf3)) {
            set_leaf_to_initial_position(leaf3);
        } else {
            leaf_down(leaf3);
        }

        
        if (high < 1) {
            $("#scoreboard-mild").removeClass('active');
        } else {
            $("#scoreboard-mild").addClass('active');
        }

        if (high < 2) {
            $("#scoreboard-medium").removeClass('active');
        } else {
            $("#scoreboard-medium").addClass('active');
        }

        if (high < 3) {
            $("#scoreboard-high").removeClass('active');
        } else {
            $("#scoreboard-high").addClass('active');
        }

        if (high < 4) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
            $('#restart_modal').toggleClass("show");
            var firstDivContent = document.getElementById('score');
            var secondDivContent = document.getElementById('drip-socks');
            secondDivContent.value = firstDivContent.textContent;
            var thirdDivContent = document.getElementById('pickle_score');
            var fourthDivContent = document.getElementById('drip-pickles');
            fourthDivContent.value = thirdDivContent.textContent;
        }
    };
    
    anim_id = requestAnimationFrame(the_game);
});