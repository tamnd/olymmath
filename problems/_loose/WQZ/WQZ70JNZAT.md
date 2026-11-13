---
tag: WQZ70JNZAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a Q&A competition (with only two options: right or wrong), A cheats. For each question, A can peek at the guesses of the other $n$ ($n>1$, and including A, there are $n+1$ participants) participants before writing down their own answer. For each question, after all guesses are submitted, the host announces the correct answer. A correct guess scores 0 points; an incorrect guess scores -2 points for others, and only -1 point for A (because A can attack the scoring system). After the correct answer is announced, the host continues to the next question. Prove: If at some point A is ahead of everyone else by at least $2^{n-2}+1$ points, then A will definitely win first place.
