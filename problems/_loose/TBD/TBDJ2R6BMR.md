---
tag: TBDJ2R6BMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1980
    source: hf-numinamath-1-5
    label: XXXI - I - Problem 5
---
A well-known mathematician, Professor X, is playing a game with his assistant, Master Y, as follows. X gives Y a finite sequence of vectors $ \overrightarrow{a_1}, \overrightarrow{a_2}, \ldots, \overrightarrow{a_n} $; all these vectors lie in the same plane and each has a length of 1. Knowing these vectors, Y provides a sequence of signs, i.e., a sequence of numbers $ \varepsilon_1, \varepsilon_2, \ldots, \varepsilon_n $, where $ \varepsilon _j = 1 $ or $ \varepsilon _j = -1 $ ($ j = 1, 2, \ldots, n $). Then, the players consider the sequence of vectors $ \varepsilon_1 \overrightarrow{a_1} + \varepsilon_2 \overrightarrow{a_2} + \ldots + \varepsilon_k \overrightarrow{a_k} $ ($ k = 1, 2, \ldots, n $). X wins if the length of at least one of the vectors $ s_1, s_2, \ldots, s_n $ is greater than or equal to 3; otherwise, Y wins. Prove that Y can always choose the sequence of signs in such a way as to win.
