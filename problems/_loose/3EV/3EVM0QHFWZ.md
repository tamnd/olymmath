---
tag: 3EVM0QHFWZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sofiya and Marquis are playing a game. Sofiya announces to Marquis that she's thinking of a polynomial of the form $f(x)=x^3+px+q$ with three integer roots that are not necessarily distinct. She also explains that all of the integer roots have absolute value less than (and not equal to) $N$, where $N$ is some fixed number which she tells Marquis. As a "move" in this game, Marquis can ask Sofiya about any number $x$ and Sofiya will tell him whether $f(x)$ is positive negative, or zero. Marquis's goal is to figure out Sofiya's polynomial.

If $N=3\cdot 2^k$ for some positive integer $k$, prove that there is a strategy which allows Marquis to identify the polynomial after making at most $2k+1$ "moves".
