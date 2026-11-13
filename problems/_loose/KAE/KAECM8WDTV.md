---
tag: KAECM8WDTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Santa Claus plays a guessing game with Marvin before giving him his present. He hides the present behind one of $100$ doors, numbered from $1$ to $100$. Marvin can point at a door, and then Santa Claus will reply with one of the following words:

$\bullet$ "hot" if the present lies behind the guessed door,

$\bullet$ "warm" if the guess is not exact but the number of the guessed door differs from that of the present's door by at most $5$,

$\bullet$ "cold" if the numbers of the two doors differ by more than $5$.

At least how many such guesses does Marvin need, so that he can be certain about where his present is?

Marvin does not necessarily need to make a "hot" guess, just to know the correct door with $100\%$ certainty.
