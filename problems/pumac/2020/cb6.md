---
tag: 8GZ1BX70F1
kind: problem
appearances:
  - at: pumac/2020/cb6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747889
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73258
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Billy the baker makes a bunch of loaves of bread every day, and sells them in bundles of size $1, 2$ , or $3$ . On one particular day, there are $375$ orders, $125$ for each bundle type. As such, Billy goes ahead and makes just enough loaves of bread to meet all the orders. Whenever Billy makes loaves, some get burned, and are not sellable. For nonnegative i less than or equal to the total number of loaves, the probability that exactly i loaves are sellable to customers is inversely proportional to $2^i$ (otherwise, it's $0$ ). Once he makes the loaves, he distributes out all of the sellable loaves of bread to some subset of these customers (each of whom will only accept their desired bundle of bread), without worrying about the order in which he gives them out. If the expected number of ways Billy can distribute the bread is of the form $\frac{a^b}{2^c-1}$ , find $a + b + c$ .
