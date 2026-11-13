---
tag: GG6JBCGP2M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following theorem:

If $p$ is a prime number and $p>5$, then any number $z$ consisting of $p-1$ identical digits $n$ is divisible by $p$.

Examples: 444444 is divisible by 7, 1111111111 is divisible by 11.

Every prime reciprocal (except for $p=2$ and $p=5$) can be written as a purely periodic decimal fraction with exactly $(p-1)$ digits in the period. The possibility of shorter periods can be ignored here, as the period length must always be a divisor of $p-1$, so a correspondingly multiplied period could be assumed.

Such a $(p-1)$-digit period, when multiplied by $p$, results in a $(p-1)$-digit number consisting entirely of nines, which, when divided by 9, yields a $(p-1)$-digit number consisting entirely of ones that is divisible by $p$. Any multiple of such a number is then also divisible by $p$, of course assuming $p>5$.
