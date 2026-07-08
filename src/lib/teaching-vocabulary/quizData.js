// Bilingual quiz data for Teaching Grammar and Vocabulary
// Based on standard ELT/TESOL pedagogy aligned with the uploaded PDF theme.

export const grammarQuiz = {
	id: 'grammar',
	en: { title: 'Teaching Grammar', description: 'Test your understanding of grammar teaching approaches, lesson frameworks and correction techniques.' },
	es: { title: 'Enseñanza de la Gramática', description: 'Evalúa tu comprensión de enfoques de enseñanza de gramática, marcos de lección y técnicas de corrección.' },
	questions: [
		{
			id: 1,
			en: 'What does the PPP framework stand for in a grammar lesson?',
			es: '¿Qué significa el marco PPP en una lección de gramática?',
			options: [
				{ en: 'Plan, Prepare, Produce', es: 'Planificar, Preparar, Producir', correct: false },
				{ en: 'Presentation, Practice, Production', es: 'Presentación, Práctica, Producción', correct: true },
				{ en: 'Practice, Pronunciation, Presentation', es: 'Práctica, Pronunciación, Presentación', correct: false },
				{ en: 'Prepare, Practice, Perform', es: 'Preparar, Practicar, Actuar', correct: false }
			],
			explanation: {
				en: 'PPP is a classic lesson shape: the teacher first presents the form/structure, students then practise it in controlled exercises, and finally use it in a freer, communicative activity.',
				es: 'PPP es un marco clásico: el docente presenta la estructura, los estudiantes la practican con ejercicios controlados y, finalmente, la usan en una actividad comunicativa más libre.'
			}
		},
		{
			id: 2,
			en: 'In a deductive grammar lesson, what happens first?',
			es: 'En una lección de gramática deductiva, ¿qué ocurre primero?',
			options: [
				{ en: 'Students discover the rule from examples', es: 'Los estudiantes descubren la regla a partir de ejemplos', correct: false },
				{ en: 'The teacher gives the rule and then provides examples', es: 'El profesor da la regla y luego provee ejemplos', correct: true },
				{ en: 'Students practise without any explanation', es: 'Los estudiantes practican sin ninguna explicación', correct: false },
				{ en: 'The teacher elicits meaning from context only', es: 'El profesor extrae el significado solo del contexto', correct: false }
			],
			explanation: {
				en: 'Deductive teaching starts with the rule and then checks understanding through examples. Inductive teaching does the reverse.',
				es: 'La enseñanza deductiva comienza con la regla y luego verifica la comprensión mediante ejemplos. La enseñanza inductiva hace lo contrario.'
			}
		},
		{
			id: 3,
			en: 'Which approach asks learners to notice patterns in authentic examples and derive the rule themselves?',
			es: '¿Qué enfoque pide a los estudiantes notar patrones en ejemplos auténticos y derivar la regla por sí mismos?',
			options: [
				{ en: 'Deductive approach', es: 'Enfoque deductivo', correct: false },
				{ en: 'Grammar-translation', es: 'Traducción gramatical', correct: false },
				{ en: 'Inductive approach', es: 'Enfoque inductivo', correct: true },
				{ en: 'Drill-based approach', es: 'Enfoque basado en repeticiones', correct: false }
			],
			explanation: {
				en: 'An inductive approach gives examples first and encourages learners to discover the rule, promoting deeper processing and engagement.',
				es: 'Un enfoque inductivo presenta ejemplos primero y anima a los estudiantes a descubrir la regla, promoviendo un procesamiento más profundo y la participación.'
			}
		},
		{
			id: 4,
			en: 'What is the main purpose of "noticing" in grammar teaching?',
			es: '¿Cuál es el propósito principal del "noticing" en la enseñanza de gramática?',
			options: [
				{ en: 'To make learners write more homework', es: 'Hacer que los estudiantes escriban más tareas', correct: false },
				{ en: 'To draw learners\' attention to the grammatical feature', es: 'Atraer la atención de los estudiantes hacia el rasgo gramatical', correct: true },
				{ en: 'To test memorisation of rules', es: 'Probar la memorización de reglas', correct: false },
				{ en: 'To reduce speaking practice', es: 'Reducir la práctica oral', correct: false }
			],
			explanation: {
				en: 'Noticing helps learners become aware of a form in input, which is a first step toward acquisition. Schmidt\'s Noticing Hypothesis supports this.',
				es: 'El noticing ayuda a los estudiantes a tomar conciencia de una forma en la entrada lingüística, un primer paso hacia la adquisición. La Hipótesis de Noticing de Schmidt respalda esto.'
			}
		},
		{
			id: 5,
			en: 'Which of these best describes a "freer practice" grammar activity?',
			es: '¿Cuál de estas describe mejor una actividad de "práctica libre" de gramática?',
			options: [
				{ en: 'A gap-fill with only one correct answer', es: 'Un ejercicio de completar con una única respuesta correcta', correct: false },
				{ en: 'A personalised speaking task where learners choose what to say', es: 'Una tarea oral personalizada donde los estudiantes eligen qué decir', correct: true },
				{ en: 'A substitution drill led by the teacher', es: 'Un ejercicio de sustitución dirigido por el profesor', correct: false },
				{ en: 'A worksheet with sentence transformation', es: 'Una hoja de trabajo con transformación de oraciones', correct: false }
			],
			explanation: {
				en: 'Freer practice lets learners use the target structure in meaningful, personal communication, though accuracy may vary.',
				es: 'La práctica libre permite a los estudiantes usar la estructura objetivo en una comunicación significativa y personal, aunque la precisión puede variar.'
			}
		},
		{
			id: 6,
			en: 'When is delayed error correction usually more effective than immediate correction?',
			es: '¿Cuándo es la corrección diferida normalmente más efectiva que la corrección inmediata?',
			options: [
				{ en: 'During a fluency activity to avoid interrupting communication', es: 'Durante una actividad de fluidez para evitar interrumpir la comunicación', correct: true },
				{ en: 'When introducing a new rule', es: 'Cuando se introduce una nueva regla', correct: false },
				{ en: 'In a fill-in-the-blanks exercise', es: 'En un ejercicio de completar espacios', correct: false },
				{ en: 'When drilling pronunciation individually', es: 'Cuando se practica pronunciación individualmente', correct: false }
			],
			explanation: {
				en: 'Delayed correction protects fluency and avoids knocking confidence during speaking tasks. The teacher can revisit errors after the activity.',
				es: 'La corrección diferida protege la fluidez y evita minar la confianza durante las tareas orales. El profesor puede revisar los errores después de la actividad.'
			}
		},
		{
			id: 7,
			en: 'What does "metalanguage" refer to in the grammar classroom?',
			es: '¿A qué se refiere el "metalenguaje" en el aula de gramática?',
			options: [
				{ en: 'The target language being learnt', es: 'El idioma objetivo que se está aprendiendo', correct: false },
				{ en: 'The language used to talk about language itself', es: 'El lenguaje usado para hablar del propio lenguaje', correct: true },
				{ en: 'A translation from the mother tongue', es: 'Una traducción de la lengua materna', correct: false },
				{ en: 'Listening materials only', es: 'Solo materiales de escucha', correct: false }
			],
			explanation: {
				en: 'Metalanguage includes terms like noun, clause, tense, article and past participle. It is useful but can overwhelm beginners if overused.',
				es: 'El metalenguaje incluye términos como sustantivo, cláusula, tiempo, artículo y participio pasado. Es útil, pero puede abrumar a principiantes si se usa en exceso.'
			}
		},
		{
			id: 8,
			en: 'Which lesson design is most strongly associated with using grammar to complete a meaningful outcome?',
			es: '¿Qué diseño de lección se asocia más con usar la gramática para completar un resultado significativo?',
			options: [
				{ en: 'Task-Based Language Teaching (TBLT)', es: 'Enseñanza de lenguaje basada en tareas (TBLT)', correct: true },
				{ en: 'Audio-lingual drill book', es: 'Libro de repeticiones audiolingües', correct: false },
				{ en: 'Choral repetition', es: 'Repetición coral', correct: false },
				{ en: 'Translation dictation', es: 'Dictado de traducción', correct: false }
			],
			explanation: {
				en: 'Task-based teaching presents a task or problem first; learners use language — including grammar — to achieve a real communicative goal.',
				es: 'La enseñanza basada en tareas presenta primero una tarea o problema; los estudiantes usan el lenguaje, incluida la gramática, para lograr un objetivo comunicativo real.'
			}
		},
		{
			id: 9,
			en: 'Why can pairwork help reduce anxiety during grammar practice?',
			es: '¿Por qué el trabajo en parejas puede ayudar a reducir la ansiedad durante la práctica de gramática?',
			options: [
				{ en: 'It removes all teacher correction', es: 'Elimina toda corrección del profesor', correct: false },
				{ en: 'It lowers the feeling of being watched by the whole class', es: 'Reduce la sensación de ser observado por toda la clase', correct: true },
				{ en: 'It guarantees 100% accuracy', es: 'Garantiza un 100% de precisión', correct: false },
				{ en: 'It replaces individual study', es: 'Remplaza el estudio individual', correct: false }
			],
			explanation: {
				en: 'Pairwork reduces peer pressure and increases interaction, which makes students more willing to experiment with new structures.',
				es: 'El trabajo en parejas reduce la presión social y aumenta la interacción, haciendo que los estudiantes estén más dispuestos a experimentar con nuevas estructuras.'
			}
		},
		{
			id: 10,
			en: 'Which three dimensions are often used to analyse a grammar item?',
			es: '¿Qué tres dimensiones se usan frecuentemente para analizar un elemento gramatical?',
			options: [
				{ en: 'Form, meaning and use', es: 'Forma, significado y uso', correct: true },
				{ en: 'Spelling, sound and speed', es: 'Ortografía, sonido y velocidad', correct: false },
				{ en: 'Input, output and homework', es: 'Entrada, salida y tarea', correct: false },
				{ en: 'Reading, writing and testing', es: 'Lectura, escritura y evaluación', correct: false }
			],
			explanation: {
				en: 'Teachers examine form (how it is made), meaning (what it means) and use/pragmatics (when and why we choose it).',
				es: 'Los docentes examinan la forma (cómo se construye), el significado (qué expresa) y el uso/pragmática (cuándo y por qué se elige).'
			}
		}
	]
};

export const vocabularyQuiz = {
	id: 'vocabulary',
	en: { title: 'Teaching Vocabulary', description: 'Assess your knowledge of how to select, present, practise and remember lexis in the language classroom.' },
	es: { title: 'Enseñanza del Vocabulario', description: 'Evalúa tu conocimiento sobre cómo seleccionar, presentar, practicar y recordar el lésico en el aula de idiomas.' },
	questions: [
		{
			id: 1,
			en: 'What is a collocation?',
			es: '¿Qué es una colocación?',
			options: [
				{ en: 'A single unknown word', es: 'Una palabra desconocida individual', correct: false },
				{ en: 'Words that are often used together in a fixed or typical way', es: 'Palabras que frecuentemente se usan juntas de forma fija o típica', correct: true },
				{ en: 'A word with no synonyms', es: 'Una palabra sin sinónimos', correct: false },
				{ en: 'A word from the academic word list only', es: 'Una palabra solo de la lista académica de palabras', correct: false }
			],
			explanation: {
				en: 'Collocations such as "make a decision" or "heavy rain" are lexical chunks that fluent speakers store as single units.',
				es: 'Colocaciones como "make a decision" o "heavy rain" son bloques de léxico que los hablantes fluidos almacenan como unidades individuales.'
			}
		},
		{
			id: 2,
			en: 'What is the difference between receptive and productive vocabulary?',
			es: '¿Cuál es la diferencia entre vocabulario receptivo y productivo?',
			options: [
				{ en: 'Receptive words are recognised; productive words can be used actively', es: 'Las palabras receptivas se reconocen; las productivas se pueden usar activamente', correct: true },
				{ en: 'Receptive words are only from reading', es: 'Las palabras receptivas son solo de la lectura', correct: false },
				{ en: 'Productive words are never tested', es: 'Las palabras productivas nunca se evalúan', correct: false },
				{ en: 'There is no difference between them', es: 'No hay diferencia entre ellas', correct: false }
			],
			explanation: {
				en: 'Receptive knowledge is passive recognition; productive knowledge means learners can use the word accurately in speech or writing.',
				es: 'El conocimiento receptivo es reconocimiento pasivo; el conocimiento productivo significa que el estudiante puede usar la palabra con precisión al hablar o escribir.'
			}
		},
		{
			id: 3,
			en: 'Which principle suggests that words are best learned in groups such as phrases or chunks?',
			es: '¿Qué principio sugiere que las palabras se aprenden mejor en grupos como frases o bloques?',
			options: [
				{ en: 'The lexical approach', es: 'El enfoque léxico', correct: true },
				{ en: 'The grammar-translation method', es: 'El método de traducción gramatical', correct: false },
				{ en: 'The silent way', es: 'El camino silencioso', correct: false },
				{ en: 'Direct method', es: 'Método directo', correct: false }
			],
			explanation: {
				en: 'The lexical approach focuses on multiword units, collocations and chunks rather than single words in isolation.',
				es: 'El enfoque léxico se centra en unidades de varias palabras, colocaciones y bloques en lugar de palabras individuales de forma aislada.'
			}
		},
		{
			id: 4,
			en: 'Why is it generally better to present new vocabulary in context?',
			es: '¿Por qué generalmente es mejor presentar vocabulario nuevo en contexto?',
			options: [
				{ en: 'It guarantees the word is never forgotten', es: 'Garantiza que la palabra nunca se olvide', correct: false },
				{ en: 'It helps learners infer meaning, register and use', es: 'Ayuda a los estudiantes a inferir el significado, registro y uso', correct: true },
				{ en: 'It removes the need for translation', es: 'Elimina la necesidad de traducción', correct: false },
				{ en: 'It makes the dictionary unnecessary', es: 'Hace innecesario el diccionario', correct: false }
			],
			explanation: {
				en: 'Context shows how a word is used naturally and guides learners to guess meaning before the teacher confirms or explains.',
				es: 'El contexto muestra cómo se usa una palabra de forma natural y guía a los estudiantes a adivinar el significado antes de que el profesor confirme o explique.'
			}
		},
		{
			id: 5,
			en: 'What does "spaced repetition" involve?',
			es: '¿Qué implica la "repetición espaciada"?',
			options: [
				{ en: 'Reviewing new words at increasing time intervals', es: 'Revisar palabras nuevas a intervalos de tiempo crecientes', correct: true },
				{ en: 'Repeating a word exactly five times in one minute', es: 'Repetir una palabra exactamente cinco veces en un minuto', correct: false },
				{ en: 'Learning words in alphabetical order', es: 'Aprender palabras en orden alfabético', correct: false },
				{ en: 'Only studying vocabulary before an exam', es: 'Solo estudiar vocabulario antes de un examen', correct: false }
			],
			explanation: {
				en: 'Spaced repetition schedules reviews further apart over time, which strengthens long-term memory more effectively than massed practice.',
				es: 'La repetición espaciada programa revisiones más separadas en el tiempo, fortaleciendo la memoria a largo plazo de forma más efectiva que la práctica masiva.'
			}
		},
		{
			id: 6,
			en: 'Which activity helps learners remember a word by seeing how it connects to related words?',
			es: '¿Qué actividad ayuda a recordar una palabra al ver cómo se conecta con palabras relacionadas?',
			options: [
				{ en: 'A word map or mind map', es: 'Un mapa de palabras o mapa mental', correct: true },
				{ en: 'Random letter dictation', es: 'Dictado de letras aleatorias', correct: false },
				{ en: 'Timed silent reading', es: 'Lectura silenciosa cronometrada', correct: false },
				{ en: 'Copying the word 100 times', es: 'Copiar la palabra 100 veces', correct: false }
			],
			explanation: {
				en: 'Word maps show semantic networks (synonyms, opposites, word families, collocations), which deepens understanding and recall.',
				es: 'Los mapas de palabras muestran redes semánticas (sinónimos, antónimos, familias de palabras, colocaciones), profundizando la comprensión y el recuerdo.'
			}
		},
		{
			id: 7,
			en: 'What is "incidental vocabulary learning"?',
			es: '¿Qué es el "aprendizaje incidental de vocabulario"?',
			options: [
				{ en: 'Picking up words while doing an activity whose main focus is not vocabulary', es: 'Adquirir palabras mientras se realiza una actividad cuyo enfoque principal no es el vocabulario', correct: true },
				{ en: 'Studying a word list every day', es: 'Estudiar una lista de palabras todos los días', correct: false },
				{ en: 'Taking a vocabulary exam by chance', es: 'Tomar un examen de vocabulario por casualidad', correct: false },
				{ en: 'Memorising definitions in order', es: 'Memorizar definiciones en orden', correct: false }
			],
			explanation: {
				en: 'Learners absorb vocabulary incidentally through extensive reading, listening and communicative tasks without deliberate study.',
				es: 'Los estudiantes absorben vocabulario de forma incidental mediante lectura extensiva, escucha y tareas comunicativas sin estudio deliberado.'
			}
		},
		{
			id: 8,
			en: 'Which factor is most important when selecting words to teach from a text?',
			es: '¿Qué factor es más importante al seleccionar palabras para enseñar de un texto?',
			options: [
				{ en: 'How well the words support the lesson\'s communicative goal', es: 'Qué tan bien las palabras apoyan el objetivo comunicativo de la lección', correct: true },
				{ en: 'How long the word is in letters', es: 'Qué tan larga es la palabra en letras', correct: false },
				{ en: 'Whether the word has been seen before', es: 'Si la palabra se ha visto antes', correct: false },
				{ en: 'How many syllables it has', es: 'Cuántas sílabas tiene', correct: false }
			],
			explanation: {
				en: 'Teachers prioritise high-frequency, useful words that serve the task and learners\' needs rather than random or trivial items.',
				es: 'Los docentes priorizan palabras de alta frecuencia y útiles que sirvan a la tarea y a las necesidades de los estudiantes en lugar de elementos aleatorios o triviales.'
			}
		},
		{
			id: 9,
			en: 'What does "vocabulary depth" mean?',
			es: '¿Qué significa "profundidad de vocabulario"?',
			options: [
				{ en: 'How many words a learner knows', es: 'Cuántas palabras conoce un estudiante', correct: false },
				{ en: 'How well a learner knows a word, including collocations and register', es: 'Qué tan bien conoce una palabra, incluyendo colocaciones y registro', correct: true },
				{ en: 'How quickly a learner can say a word', es: 'Qué tan rápido puede decir una palabra', correct: false },
				{ en: 'How many languages the word exists in', es: 'En cuántos idiomas existe la palabra', correct: false }
			],
			explanation: {
				en: 'Depth of knowledge includes meaning, usage, collocations, connotations and grammatical behaviour, beyond simple word-count size.',
				es: 'La profundidad de conocimiento incluye el significado, uso, colocaciones, connotaciones y comportamiento gramatical, más allá del simple conteo de palabras.'
			}
		},
		{
			id: 10,
			en: 'Why are games especially useful for vocabulary learning with younger learners?',
			es: '¿Por qué los juegos son especialmente útiles para aprender vocabulario con estudiantes más jóvenes?',
			options: [
				{ en: 'They make repetition fun and reduce anxiety', es: 'Hacen la repetición divertida y reducen la ansiedad', correct: true },
				{ en: 'They replace all reading and writing', es: 'Remplazan toda la lectura y escritura', correct: false },
				{ en: 'They guarantee native-like fluency', es: 'Garantizan fluidez nativa', correct: false },
				{ en: 'They remove the need for feedback', es: 'Eliminan la necesidad de retroalimentación', correct: false }
			],
			explanation: {
				en: 'Games provide meaningful recycling of words in an enjoyable way, which supports motivation and long-term memory.',
				es: 'Los juegos ofrecen reciclaje significativo de palabras de forma agradable, apoyando la motivación y la memoria a largo plazo.'
			}
		}
	]
};
