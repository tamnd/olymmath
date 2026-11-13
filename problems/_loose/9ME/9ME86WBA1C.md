---
tag: 9ME86WBA1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2006
    source: hf-ai-mo-aops
    label: 2006 China Team Selection Test
---
The function $f(n)$ satisfies $f(0)=0$ , $f(n)=n-f \left( f(n-1) \right)$ , $n=1,2,3 \cdots$ . Find all polynomials $g(x)$ with real coefficient such that
$$ f(n)= [ g(n) ], n=0,1,2 \cdots $$
Where $[ g(n) ]$ denote the greatest integer that does not exceed $g(n)$ .
