---
tag: 3WXKEAQ4Q8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h518182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10019
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212015
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2013
    source: hf-ai-mo-aops
    label: 2013 Olympic Revenge
---
Let $n$ to be a positive integer. A family $\wp$ of intervals $[i, j]$ with $0 \le i < j \le n$ and $i$ , $j$ integers is considered *happy* if, for any $I_1 = [i_1, j_1] \in \wp$ and $I_2 = [i_2, j_2] \in \wp$ such that $I_1 \subset I_2$ , we have $i_1 = i_2$ **or** $j_1 = j_2$ .

Determine the maximum number of elements of a *happy* family.
