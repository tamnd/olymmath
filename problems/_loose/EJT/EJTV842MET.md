---
tag: EJTV842MET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17520
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Define a search algorithm called $\texttt{powSearch}$ . Throughout, assume $A$ is a 1-indexed sorted array of distinct integers. To search for an integer $b$ in this array, we search the indices $2^0,2^1,\ldots$ until we either reach the end of the array or $A[2^k] > b$ . If at any point we get $A[2^k] = b$ we stop and return $2^k$ . Once we have $A[2^k] > b > A[2^{k-1}]$ , we throw away the first $2^{k-1}$ elements of $A$ , and recursively search in the same fashion. For example, for an integer which is at position $3$ we will search the locations $1, 2, 4, 3$ .

Define $g(x)$ to be a function which returns how many (not necessarily distinct) indices we look at when calling $\texttt{powSearch}$ with an integer $b$ at position $x$ in $A$ . For example, $g(3) = 4$ . If $A$ has length $64$ , find
$$g(1) + g(2) + \ldots + g(64).$$
