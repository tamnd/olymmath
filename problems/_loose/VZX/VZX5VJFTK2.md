---
tag: VZX5VJFTK2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eva looks at "words" consisting of $n$ letters, each equal to ' $L$ ' or ' $R$ '. In a turn, Eva may replace 'RL' with 'LR' somewhere in such a word. For example, she turns the word 'LRRLRRLR' into the word 'LRLRRLRR' in two turns. If nowhere an ' $L$ ' stands directly to the right of an ' $R$ ', Eva can no longer make a move.

(a) Eva has such a word of length $n$. Prove that Eva can only make a finite number of moves.

(b) Given $n>1$ and $\ell$ with $0<\ell<n$. For each word of length $n$ with exactly $\ell$ times an ' $L$ ', Eva records how many moves she can make at most. What is the largest number she has written down? (Give your answer in terms of $n$ and $\ell$.) Prove that your answer is correct. That is: give a word of length $n$ with exactly $\ell$ times the letter ' $L$ ' for which the maximum number of moves is achieved and prove that the maximum number of moves for all other words of length $n$ with exactly $\ell$ times the letter ' $L$ ' cannot be greater.

(c) Let $n \geqslant 2$. For each word of length $n$ (with 1 or more times an ' $L$ ' and 1 or more times an ' $R$ '), Eva records how many moves she can make at most. How many letters ' $L$ ' does the word (or the words) for which she has written down the largest number contain? (Give your answer in terms of $n$.)
