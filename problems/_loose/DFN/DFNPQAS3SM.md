---
tag: DFNPQAS3SM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kolya had a polynomial of the hundredth degree written in his notebook. Kolya can take one of the polynomials written in the notebook, add $a$ to the coefficient of the $k$-th degree and subtract $2a$ from the coefficient of the $(k+1)$-th degree, after which he can write the resulting polynomial in the notebook along with the existing ones. Can he end up with two polynomials in his notebook, one of which is strictly greater than the other, after some number of such operations?

If the coefficient of some degree is zero, the operation can still be performed with it.
