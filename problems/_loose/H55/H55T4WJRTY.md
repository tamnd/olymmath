---
tag: H55T4WJRTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h36604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40003
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Germany Team Selection Test
---
In the following, a *word* will mean a finite sequence of letters " $a$ " and " $b$ ". The *length* of a word will mean the number of the letters of the word. For instance, $abaab$ is a word of length $5$ . There exists exactly one word of length $0$ , namely the empty word.

A word $w$ of length $\ell$ consisting of the letters $x_1$ , $x_2$ , ..., $x_{\ell}$ in this order is called a *palindrome* if and only if $x_j=x_{\ell+1-j}$ holds for every $j$ such that $1\leq j\leq\ell$ . For instance, $baaab$ is a palindrome; so is the empty word.

For two words $w_1$ and $w_2$ , let $w_1w_2$ denote the word formed by writing the word $w_2$ directly after the word $w_1$ . For instance, if $w_1=baa$ and $w_2=bb$ , then $w_1w_2=baabb$ .

Let $r$ , $s$ , $t$ be nonnegative integers satisfying $r + s = t + 2$ . Prove that there exist palindromes $A$ , $B$ , $C$ with lengths $r$ , $s$ , $t$ , respectively, such that $AB=Cab$ , if and only if the integers $r + 2$ and $s - 2$ are coprime.
