---
tag: 9GP3JRPEWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are only two letters in the Mumu tribe alphabet: M and $U$. The word in the Mumu language is any sequence of letters $M$ and $U$, in which next to each letter $M$ there is a letter $U$ (for example, $UUU$ and $UMMUM$ are words and $MMU$ is not). Let $f(m,u)$ denote the number of words in the Mumu language which have $m$ times the letter $M$ and $u$ times the letter $U$. Prove that $f (m, u) - f (2u - m + 1, u) = f (m, u - 1) - f (2u - m + 1, u - 1)$ for any $u \ge 2,3 \le m \le 2u$.
