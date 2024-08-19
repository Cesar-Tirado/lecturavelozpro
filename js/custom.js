/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});


	
	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.owl-carousel').owlCarousel({
		items: 5,
		loop: true,
		margin: 10,
		merge: true,
		responsive: {
			678: {
				mergeFit: true
			},
			1000: {
				mergeFit: false
			}
		}
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

document.addEventListener('DOMContentLoaded', function () {
    // Configuración inicial del tiempo (en segundos)
    let timeLeft = 28 * 60; // 28 minutos convertidos a segundos

    // Selecciona el elemento donde se mostrará el tiempo restante
    const countdownElement = document.querySelector('.countdown');

    function startCountdown() {
        const timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                countdownElement.textContent = "¡La oferta ha terminado!";
            } else {
                // Calcular horas, minutos y segundos
                const hours = Math.floor(timeLeft / 3600); // Siempre será 0 en este caso
                const minutes = Math.floor((timeLeft % 3600) / 60);
                const seconds = timeLeft % 60;

                // Mostrar el tiempo en formato hh:mm:ss con horas siempre a "00"
                countdownElement.textContent = ` ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                // Decrementar el tiempo restante
                timeLeft--;
            }
        }, 1000); // Intervalo de 1 segundo
    }

    // Iniciar la cuenta regresiva
    startCountdown();
});




document.addEventListener('DOMContentLoaded', function () {
	// Botones de selección de ejercicio
	const exercise1Btn = document.getElementById('exercise1Btn');
	const exercise2Btn = document.getElementById('exercise2Btn');
	const exercise3Btn = document.getElementById('exercise3Btn');

	// Contenedores de ejercicios
	const exercise1 = document.getElementById('exercise1');
	const exercise2 = document.getElementById('exercise2');
	const exercise3 = document.getElementById('exercise3');

	const exercise5Btn = document.getElementById('exercise5Btn');
	const exercise6Btn = document.getElementById('exercise6Btn');

	const exercise4 = document.getElementById('exercise4');
	const exercise5 = document.getElementById('exercise5');
	const exercise6 = document.getElementById('exercise6');



exercise5Btn.addEventListener('click', function () {
    toggleExercises(exercise5);
});

exercise6Btn.addEventListener('click', function () {
    toggleExercises(exercise6);
});


	// Ocultar y mostrar ejercicios
	exercise1Btn.addEventListener('click', function () {
		toggleExercises(exercise1);
	});

	exercise2Btn.addEventListener('click', function () {
		toggleExercises(exercise2);
	});

	exercise3Btn.addEventListener('click', function () {
		toggleExercises(exercise3);
	});

	function toggleExercises(activeExercise) {
		// Ocultar todos los ejercicios
		exercise1.style.display = 'none';
		exercise2.style.display = 'none';
		exercise3.style.display = 'none';
		exercise4.style.display = 'none';
		exercise5.style.display = 'none';
		exercise6.style.display = 'none';
		
		// Limpiar contenido dinámico en los ejercicios
		clearExerciseContent();
	
		// Mostrar solo el ejercicio activo
		activeExercise.style.display = 'block';
	}

	function clearExerciseContent() {
		// Limpiar cualquier contenido dinámico de los ejercicios
		document.getElementById('peripheralText').textContent = '';
		document.getElementById('peripheralOptions').innerHTML = '';
		document.getElementById('distractorText').innerHTML = '';
		document.getElementById('verticalText').innerHTML = '';
	}

	// Ejercicio 1: Salto de Ojo
	let jumpInterval;
	const jumpDot = document.getElementById('jumpDot');

	document.getElementById('startJump').addEventListener('click', function () {
		this.style.display = 'none';
		document.getElementById('stopJump').style.display = 'inline-block';
                jumpDot.style.display = 'block';
                jumpInterval = setInterval(moveDot, 1000);
            });

            document.getElementById('stopJump').addEventListener('click', function () {
                clearInterval(jumpInterval);
                jumpDot.style.display = 'none';
                this.style.display = 'none';
                document.getElementById('startJump').style.display = 'inline-block';
            });

            function moveDot() {
				const exercisePanel = document.getElementById('exercisePanel');
				const panelWidth = exercisePanel.clientWidth;
				const panelHeight = exercisePanel.clientHeight;
				const dotSize = jumpDot.clientWidth; // Asumiendo que el punto es cuadrado, el ancho es igual al alto.
			
				const x = Math.random() * (panelWidth - dotSize);
				const y = Math.random() * (panelHeight - dotSize);
				jumpDot.style.left = `${x}px`;
				jumpDot.style.top = `${y}px`;
			}
			

            // Ejercicio 2: Lectura de Palabras
			const words = [
				"rápido", "lectura", "práctica", "eficiencia", "velocidad", "comprensión", 
				"memoria", "atención", "concentración", "retención", "fluidez", "habilidad", 
				"cognición", "aprendizaje", "texto", "contenido", "información", "análisis", 
				"síntesis", "evaluación", "determinación", "perseverancia", "persistencia", 
				"dedicación", "creatividad", "pensamiento", "razonamiento", "estrategia", 
				"método", "técnica"
			];
						let wordIndex = 0;
            let wordInterval;
            const displayWord = document.getElementById('displayWord');
            let speedWordValue = 1000; // Valor inicial para medio (1000ms)

            document.getElementById('startWords').addEventListener('click', function () {
                this.style.display = 'none';
                document.getElementById('stopWords').style.display = 'inline-block';
                wordInterval = setInterval(showWord, speedWordValue);
                document.querySelector('#exercise2 .speed-buttons').style.display = 'block';
            });

            document.getElementById('stopWords').addEventListener('click', function () {
                clearInterval(wordInterval);
                this.style.display = 'none';
                document.getElementById('startWords').style.display = 'inline-block';
                displayWord.textContent = '';
                document.querySelector('#exercise2 .speed-buttons').style.display = 'none';
            });

            document.getElementById('slowWords').addEventListener('click', function () {
                updateWordSpeed(2000); // Lento
            });

            document.getElementById('mediumWords').addEventListener('click', function () {
                updateWordSpeed(1000); // Medio
            });

            document.getElementById('fastWords').addEventListener('click', function () {
                updateWordSpeed(500); // Rápido
            });

            document.getElementById('proWords').addEventListener('click', function () {
                updateWordSpeed(250); // Profesional
            });

            function updateWordSpeed(newSpeed) {
                clearInterval(wordInterval);
                speedWordValue = newSpeed;
                wordInterval = setInterval(showWord, speedWordValue);
            }

            function showWord() {
                displayWord.textContent = words[wordIndex];
                wordIndex = (wordIndex + 1) % words.length;
            }

            // Ejercicio 3: Lectura de Frases
			const phrases = [
				"La lectura rápida aumenta la productividad.",
				"Con práctica, puedes mejorar tu comprensión.",
				"El tiempo de reacción es clave en la lectura rápida.",
				"La concentración es esencial para leer eficientemente.",
				"Leer con fluidez ayuda a retener más información.",
				"El hábito de la lectura diaria mejora tu enfoque.",
				"Los ejercicios de lectura aumentan la velocidad mental.",
				"Un buen lector sabe adaptar su velocidad a cada texto.",
				"Leer diversos géneros mejora la comprensión global.",
				"La lectura profunda fomenta el pensamiento crítico.",
				"La práctica constante refuerza la habilidad lectora.",
				"La lectura veloz permite absorber más contenido en menos tiempo.",
				"La comprensión depende tanto de la velocidad como del contexto.",
				"Un vocabulario amplio facilita la lectura y el aprendizaje.",
				"La lectura efectiva combina velocidad con atención al detalle."
			];
			
            let phraseIndex = 0;
            let phraseInterval;
            const displayPhrase = document.getElementById('displayPhrase');
            let speedPhraseValue = 3000; // Valor inicial para medio (3000ms)

            document.getElementById('startPhrases').addEventListener('click', function () {
                this.style.display = 'none';
                document.getElementById('stopPhrases').style.display = 'inline-block';
                phraseInterval = setInterval(showPhrase, speedPhraseValue);
                document.querySelector('#exercise3 .speed-buttons').style.display = 'block';
            });

            document.getElementById('stopPhrases').addEventListener('click', function () {
                clearInterval(phraseInterval);
                this.style.display = 'none';
                document.getElementById('startPhrases').style.display = 'inline-block';
                displayPhrase.textContent = '';
                document.querySelector('#exercise3 .speed-buttons').style.display = 'none';
            });

            document.getElementById('slowPhrases').addEventListener('click', function () {
                updatePhraseSpeed(5000); // Lento
            });

            document.getElementById('mediumPhrases').addEventListener('click', function () {
                updatePhraseSpeed(3000); // Medio
            });

            document.getElementById('fastPhrases').addEventListener('click', function () {
                updatePhraseSpeed(2000); // Rápido
            });

            document.getElementById('proPhrases').addEventListener('click', function () {
                updatePhraseSpeed(1000); // Profesional
            });

            function updatePhraseSpeed(newSpeed) {
                clearInterval(phraseInterval);
                speedPhraseValue = newSpeed;
                phraseInterval = setInterval(showPhrase, speedPhraseValue);
            }

            function showPhrase() {
                displayPhrase.textContent = phrases[phraseIndex];
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }


			
			
// ------------------------------------------------- EJERCICIO DISTRACTORES ---------------------------------------------------
	
	

			const verticalExamples = [
				["Primero debes", "enfocarte en leer", "una palabra a la vez.", "Mejorarás con práctica."],
				["Leer verticalmente", "puede ayudarte", "a aumentar tu", "velocidad de lectura."],
				["Concéntrate en", "el texto que", "aparece en la", "pantalla."],
			];
			
			let currentExampleIndex = 0;
			
			function startVerticalReading(direction = 'up') {
				const verticalContainer = document.getElementById('verticalText');
				verticalContainer.innerHTML = ''; // Limpiar contenido previo
				const currentExample = verticalExamples[currentExampleIndex];
			
				if (direction === 'up') {
					currentExample.reverse(); // Invertir el texto si la dirección es hacia arriba
				}
			
				currentExample.forEach((text, index) => {
					const textElement = document.createElement('p');
					textElement.textContent = text;
					textElement.style.opacity = 0;
					textElement.style.transition = `transform 0.5s ease ${index * 0.5}s, opacity 0.5s ease ${index * 0.5}s`;
					verticalContainer.appendChild(textElement);
			
					// Crear efecto de desplazamiento
					setTimeout(() => {
						textElement.style.transform = 'translateY(0)';
						textElement.style.opacity = 1;
					}, index * 500); // Retraso basado en el índice para efecto secuencial
				});
			
				verticalContainer.style.display = 'flex';
				verticalContainer.style.flexDirection = direction === 'up' ? 'column-reverse' : 'column';
			
				// Mostrar el botón de "Logrado" después de 1 segundo
				setTimeout(() => {
					const achievedBtn = document.getElementById('achievedBtn');
					achievedBtn.style.display = 'block';
					enableAchievedButton();
				}, currentExample.length * 500); // Mostramos el botón después de que aparezca el último texto
			}
			
			function enableAchievedButton() {
				const achievedBtn = document.getElementById('achievedBtn');
				achievedBtn.disabled = false;
			
				setTimeout(() => {
					achievedBtn.disabled = true;
				}, 10000); // Desactivar el botón después de 10 segundos
			}
			
			// Evento de click para cambiar al siguiente ejemplo cuando se presiona el botón "Logrado"
			document.getElementById('achievedBtn').addEventListener('click', () => {
				if (currentExampleIndex < verticalExamples.length - 1) {
					currentExampleIndex++;
					startVerticalReading('up');
				} else {
					alert('¡Has completado todos los ejemplos!');
					document.getElementById('achievedBtn').style.display = 'none';
					currentExampleIndex = 0; // Reiniciar el índice si deseas repetir los ejemplos
				}
			});
			
			// Llamar la función cuando el ejercicio de Lectura Vertical es seleccionado
			exercise6Btn.addEventListener('click', () => {
				currentExampleIndex = 0;
				startVerticalReading('up');
			});

			function enableAchievedButton() {
				const achievedBtn = document.getElementById('achievedBtn');
				const attemptMessage = document.getElementById('attemptMessage');
				achievedBtn.disabled = false;
				attemptMessage.style.display = 'none'; // Esconder mensaje al inicio
			
				setTimeout(() => {
					achievedBtn.disabled = true;
					attemptMessage.style.display = 'block'; // Mostrar mensaje después de 10 segundos
				}, 10000); // Desactivar el botón después de 10 segundos
			}
			
			
// ------------------------------------------------- EJERCICIO DISTRACTORES ---------------------------------------------------


		const distractorExamples = [
			{
				original: "Este es un texto con [dis] palabras que [trac] no tienen [tor] sentido.",
				correct: "Este es un texto con palabras que no tienen sentido."
			},
			{
				original: "El [exce]ciencia es [len]clave [cia]para el éxito.",
				correct: "La ciencia es clave para el éxito."
			},
			{
				original: "Es [impos] importante [sib]tener en [le]cuenta los detalles.",
				correct: "Es importante tener en cuenta los detalles."
			}
		];

		let currentDistractorIndex = 0;
		let timerInterval;

		function startDistractorExercise() {
			if (currentDistractorIndex >= distractorExamples.length) {
				alert('¡Has completado todos los ejemplos!');
				return;
			}

			const distractorText = distractorExamples[currentDistractorIndex].original;
			const distractorTextContainer = document.getElementById('distractorText');
			const distractorTimer = document.getElementById('distractorTimer');

			distractorTextContainer.innerHTML = distractorText;
			startTimer(5, distractorTimer);

			// Mostrar el texto con distractores por 5 segundos
			setTimeout(() => {
				distractorTextContainer.innerHTML = ''; // Limpiar el texto
				distractorTimer.innerHTML = ''; // Limpiar el temporizador

				// Crear el cuadro de texto y botón de verificación
				const inputField = document.createElement('input');
				inputField.type = 'text';
				inputField.id = 'userInput';
				inputField.classList.add('form-control', 'mt-3');
				distractorTextContainer.appendChild(inputField);

				const checkButton = document.createElement('button');
				checkButton.textContent = 'Verificar';
				checkButton.classList.add('btn', 'btn-primary', 'mt-3');
				checkButton.addEventListener('click', checkDistractorText);
				distractorTextContainer.appendChild(checkButton);

			}, 5000); // Tiempo para mostrar el texto con distractores
		}

		function checkDistractorText() {
			// Pasar al siguiente ejemplo después de verificar
			setTimeout(() => {
				currentDistractorIndex++;
				document.getElementById('distractorText').innerHTML = ''; // Limpiar contenido actual

				if (currentDistractorIndex < distractorExamples.length) {
					startDistractorExercise(); // Iniciar el siguiente ejemplo
				} else {
					alert('¡Has completado todos los ejemplos!');
				}
			}, 1000); // Esperar un segundo antes de pasar al siguiente ejemplo
		}

		function startTimer(seconds, display) {
			let timeLeft = seconds;
			display.textContent = `Tiempo restante: ${timeLeft}s`;

			timerInterval = setInterval(() => {
				timeLeft--;
				display.textContent = `Tiempo restante: ${timeLeft}s`;

				if (timeLeft <= 0) {
					clearInterval(timerInterval);
				}
			}, 1000);
		}

		// Llamar la función cuando el ejercicio de Eliminación de Distractores es seleccionado
		exercise5Btn.addEventListener('click', startDistractorExercise);



        });