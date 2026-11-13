---
tag: 5YFKVGP6ZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097827
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28465
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
In a function $f (x) = (x^2 + ax + b )/ (x^2 + cx + d)$ , the quadratics $x^2 + ax + b$ and $x^2 + cx + d$ have no common roots. Prove that the next two statements are equivalent:
(i) there is a numerical interval without any values of $f(x)$ ,
(ii) $f(x)$ can be represented in the form $f (x) = f_1 (f_2( ... f_{n-1} (f_n (x))... ))$ where each of the functions $f_j$ is o f one of the three forms $k_j x + b_j, 1/x, x^2$ .

(A Kanel)
