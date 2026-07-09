// Bilingual quiz data for Teaching Vocabulary
// Based on standard ELT/TESOL pedagogy aligned with the uploaded PDF theme.

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

export const vocabularyQuiz2 = {
	id: 'vocabulary2',
	en: { title: 'Vocabulary Assessment', description: 'Test your knowledge of vocabulary assessment, differentiation and learner needs.' },
	es: { title: 'Evaluación de Vocabulario', description: 'Evalúa tu conocimiento sobre evaluación de vocabulario, diferenciación y necesidades del estudiante.' },
	questions: [
		{
			id: 1,
			en: 'What is the "word family" concept in vocabulary teaching?',
			es: '¿Qué es el concepto de "familia de palabras" en la enseñanza de vocabulario?',
			options: [
				{ en: 'Words that share the same meaning', es: 'Palabras que comparten el mismo significado', correct: false },
				{ en: 'Words derived from the same root (e.g., happy, happiness, happily)', es: 'Palabras derivadas de la misma raíz (ej. happy, happiness, happily)', correct: true },
				{ en: 'Words that rhyme with each other', es: 'Palabras que riman entre sí', correct: false },
				{ en: 'Words from the same part of speech', es: 'Palabras de la misma categoría gramatical', correct: false }
			],
			explanation: {
				en: 'Word families help learners recognise patterns and expand their vocabulary more efficiently by learning related forms together.',
				es: 'Las familias de palabras ayudan a los estudiantes a reconocer patrones y expandir su vocabulario más eficientemente al aprender formas relacionadas juntas.'
			}
		},
		{
			id: 2,
			en: 'What is "lexical chunking"?',
			es: '¿Qué es el "agrupamiento léxico"?',
			options: [
				{ en: 'Breaking words into syllables', es: 'Dividir palabras en sílabas', correct: false },
				{ en: 'Learning multi-word units as single items (e.g., "I don\'t know")', es: 'Aprender unidades de varias palabras como elementos únicos (ej. "I don\'t know")', correct: true },
				{ en: 'Sorting words alphabetically', es: 'Ordenar palabras alfabéticamente', correct: false },
				{ en: 'Grouping words by length', es: 'Agrupar palabras por longitud', correct: false }
			],
			explanation: {
				en: 'Lexical chunking teaches phrases and collocations as wholes, improving fluency and natural language use.',
				es: 'El agrupamiento léxico enseña frases y colocaciones como bloques, mejorando la fluidez y el uso natural del lenguaje.'
			}
		},
		{
			id: 3,
			en: 'How can teachers differentiate vocabulary instruction for mixed-ability classes?',
			es: '¿Cómo pueden los profesores diferenciar la enseñanza de vocabulario en clases de niveles mixtos?',
			options: [
				{ en: 'Teach the same words to all students', es: 'Enseñar las mismas palabras a todos los estudiantes', correct: false },
				{ en: 'Provide tiered word lists and different practice activities', es: 'Proporcionar listas de palabras por niveles y diferentes actividades de práctica', correct: true },
				{ en: 'Only teach easy words to beginners', es: 'Enseñar solo palabras fáciles a principiantes', correct: false },
				{ en: 'Skip vocabulary instruction for advanced students', es: 'Omitir la enseñanza de vocabulario para estudiantes avanzados', correct: false }
			],
			explanation: {
				en: 'Differentiation ensures all learners work at their appropriate level while covering the same topic.',
				es: 'La diferenciación asegura que todos los estudiantes trabajen en su nivel adecuado mientras cubren el mismo tema.'
			}
		},
		{
			id: 4,
			en: 'What is "semantic mapping" useful for?',
			es: '¿Para qué es útil el "mapa semántico"?',
			options: [
				{ en: 'Only for spelling practice', es: 'Solo para práctica de ortografía', correct: false },
				{ en: 'Visually organising related words to show relationships', es: 'Organizar visualmente palabras relacionadas para mostrar relaciones', correct: true },
				{ en: 'Memorising word lists', es: 'Memorizar listas de palabras', correct: false },
				{ en: 'Testing pronunciation only', es: 'Probar solo pronunciación', correct: false }
			],
			explanation: {
				en: 'Semantic maps help learners see connections between words, aiding memory and recall through visual networks.',
				es: 'Los mapas semánticos ayudan a los estudiantes a ver conexiones entre palabras, facilitando la memoria y el recuerdo mediante redes visuales.'
			}
		},
		{
			id: 5,
			en: 'What is "vocabulary load" in a text?',
			es: '¿Qué es la "carga de vocabulario" en un texto?',
			options: [
				{ en: 'The number of pages in a text', es: 'El número de páginas en un texto', correct: false },
				{ en: 'The percentage of unknown words that makes a text difficult', es: 'El porcentaje de palabras desconocidas que hace difícil un texto', correct: true },
				{ en: 'The size of the font used', es: 'El tamaño de la fuente utilizada', correct: false },
				{ en: 'The reading speed required', es: 'La velocidad de lectura requerida', correct: false }
			],
			explanation: {
				en: 'Vocabulary load affects readability; texts with more than 5% unknown words may be too challenging without support.',
				es: 'La carga de vocabulario afecta la legibilidad; los textos con más del 5% de palabras desconocidas pueden ser demasiado desafiantes sin apoyo.'
			}
		},
		{
			id: 6,
			en: 'Why teach "connotation" along with denotation?',
			es: '¿Por qué enseñar "connotación" junto con denotación?',
			options: [
				{ en: 'It is not necessary for language learning', es: 'No es necesario para aprender idiomas', correct: false },
				{ en: 'Words have emotional and cultural meanings beyond literal definition', es: 'Las palabras tienen significados emocionales y culturales más allá de la definición literal', correct: true },
				{ en: 'Only advanced learners need it', es: 'Solo los estudiantes avanzados lo necesitan', correct: false },
				{ en: 'It is too difficult for beginners', es: 'Es demasiado difícil para principiantes', correct: false }
			],
			explanation: {
				en: 'Connotation helps learners use words appropriately in context and understand tone and register.',
				es: 'La connotación ayuda a los estudiantes a usar palabras apropiadamente en contexto y comprender el tono y el registro.'
			}
		},
		{
			id: 7,
			en: 'What is "vocabulary notebook" technique?',
			es: '¿Qué es la técnica del "cuaderno de vocabulario"?',
			options: [
				{ en: 'Writing words randomly on any page', es: 'Escribir palabras al azar en cualquier página', correct: false },
				{ en: 'Recording words with definitions, examples and personal connections', es: 'Registrar palabras con definiciones, ejemplos y conexiones personales', correct: true },
				{ en: 'Only copying from the dictionary', es: 'Solo copiar del diccionario', correct: false },
				{ en: 'Never reviewing the words', es: 'Nunca repasar las palabras', correct: false }
			],
			explanation: {
				en: 'Vocabulary notebooks encourage active engagement with words through personal examples and regular review.',
				es: 'Los cuadernos de vocabulario fomentan la participación activa con las palabras mediante ejemplos personales y repaso regular.'
			}
		},
		{
			id: 8,
			en: 'How can digital tools support vocabulary learning?',
			es: '¿Cómo pueden las herramientas digitales apoyar el aprendizaje de vocabulario?',
			options: [
				{ en: 'They have no benefit', es: 'No tienen beneficio', correct: false },
				{ en: 'Through spaced repetition apps, online dictionaries and flashcards', es: 'Mediante aplicaciones de repetición espaciada, diccionarios en línea y tarjetas de memoria', correct: true },
				{ en: 'Only for entertainment', es: 'Solo para entretenimiento', correct: false },
				{ en: 'They replace teachers completely', es: 'Reemplazan a los profesores completamente', correct: false }
			],
			explanation: {
				en: 'Digital tools provide personalised practice and immediate feedback, enhancing traditional classroom instruction.',
				es: 'Las herramientas digitales proporcionan práctica personalizada y retroalimentación inmediata, mejorando la enseñanza tradicional en el aula.'
			}
		},
		{
			id: 9,
			en: 'What is "vocabulary gap analysis"?',
			es: '¿Qué es el "análisis de brecha de vocabulario"?',
			options: [
				{ en: 'Finding missing pages in a book', es: 'Encontrar páginas faltantes en un libro', correct: false },
				{ en: 'Comparing known words to target vocabulary to identify learning needs', es: 'Comparar palabras conocidas con vocabulario objetivo para identificar necesidades de aprendizaje', correct: true },
				{ en: 'Testing only spelling', es: 'Probar solo ortografía', correct: false },
				{ en: 'Counting total words in a text', es: 'Contar el total de palabras en un texto', correct: false }
			],
			explanation: {
				en: 'Gap analysis helps teachers select appropriate vocabulary to teach based on what learners already know.',
				es: 'El análisis de brecha ayuda a los profesores a seleccionar vocabulario apropiado para enseñar basándose en lo que los estudiantes ya conocen.'
			}
		},
		{
			id: 10,
			en: 'Why teach "polysemy" to vocabulary learners?',
			es: '¿Por qué enseñar "polisemia" a los estudiantes de vocabulario?',
			options: [
				{ en: 'It is too confusing', es: 'Es demasiado confuso', correct: false },
				{ en: 'Many words have multiple meanings depending on context', es: 'Muchas palabras tienen múltiples significados dependiendo del contexto', correct: true },
				{ en: 'Only linguists need to know it', es: 'Solo los lingüistas necesitan saberlo', correct: false },
				{ en: 'It is not relevant to communication', es: 'No es relevante para la comunicación', correct: false }
			],
			explanation: {
				en: 'Understanding polysemy helps learners interpret meaning correctly in different contexts and avoid misunderstandings.',
				es: 'Comprender la polisemia ayuda a los estudiantes a interpretar el significado correctamente en diferentes contextos y evitar malentendidos.'
			}
		}
	]
};
