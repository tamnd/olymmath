---
tag: TBXJJNYRVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h3418961
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2024
    source: hf-ai-mo-aops
    label: 2024 Brazil National Olympiad
---
Consider a sequence whose first term is a given positive integer $ N > 1 $. Consider the prime factorization of $ N $. If $ N $ is a power of 2, the sequence consists of a single term: $ N $. Otherwise, the second term of the sequence is obtained by replacing the largest prime factor $ p $ of $ N $ with $ p + 1 $ in the prime factorization. If the new number is not a power of 2, we repeat the same procedure with it, remembering to factor it again into primes. If it is a power of 2, the numerical sequence ends. And so on.

For example, if the first term of the sequence is $ N = 300 = 2^2 \cdot 3 \cdot 5^2 $, since its largest prime factor is $ p = 5 $, the second term is $ 2^2 \cdot 3 \cdot (5 + 1)^2 = 2^4 \cdot 3^3 $. Repeating the procedure, the largest prime factor of the second term is $ p = 3 $, so the third term is $ 2^4 \cdot (3 + 1)^3 = 2^{10} $. Since we obtained a power of 2, the sequence has 3 terms: $ 2^2 \cdot 3 \cdot 5^2 $, $ 2^4 \cdot 3^3 $, and $ 2^{10} $.

a) How many terms does the sequence have if the first term is $ N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23 $?
b) Show that if a prime factor $ p $ leaves a remainder of 1 when divided by 3, then $ \frac{p+1}{2} $ is an integer that also leaves a remainder of 1 when divided by 3.
c) Present an initial term $ N $ less than 1,000,000 (one million) such that the sequence starting from $ N $ has exactly 11 terms.
