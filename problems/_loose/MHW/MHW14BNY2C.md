---
tag: MHW14BNY2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600611
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69388
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Tacocat the cat, who can write lowercase English letters as well as paw prints $\star$ , wishes to identify palindromes! Let $S=\{a,b,\dots,z\}$ be the set of English letters, and define $T=S\cup \{\star\}$ .

Tacocat has a list of words $(w_1, u_1)$ , $\dots$ , $(w_n, u_n)$ , made up of characters in $T$ . A human gives Tacocat a string $s$ of letters in $S$ , to which Tacocat prepends two paw prints to the left of the string, creating $s'$ . Then, Tacocat repeatedly does the following until none of $w_1$ , $\dots$ , $w_n$ is a substring of $s'$ :

- For the smallest $i$ such that $w_i$ is a substring of $s'$ , the first instance of $w_i$ is replaced by $u_i$ .

Can Tacocat choose words $w_i$ and $u_i$ , and a word $W$ , consisting of letters in $T$ , so that the process terminates for all $s$ , and the final word will be $W$ if and only if the original string $s$ was a palindrome?

*Karn Chutinan*
