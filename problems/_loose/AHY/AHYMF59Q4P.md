---
tag: AHYMF59Q4P
kind: problem
type: answer
answer: "669"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The captain and his three sailors get $2009$ golden coins with the same value . The four people decided to divide these coins by the following rules :
sailor $1$,sailor $2$,sailor $3$ everyone write down an integer $b_1,b_2,b_3$ , satisfies $b_1\ge b_2\ge b_3$ , and ${b_1+b_2+b_3=2009}$; the captain dosen't know what the numbers the sailors have written . He divides $2009$ coins into $3$ piles , with number of coins: $a_1,a_2,a_3$ , and $a_1\ge a_2\ge a_3$ . For sailor $k$ ($k=1,2,3$) , if $b_k<a_k$ , then he can take $b_k$ coins from the $k$th pile ; if $b_k\ge a_k$ , then he can't take any coins away . At last , the captain own the rest of the coins .If no matter what the numbers the sailors write , the captain can make sure that he always gets $n$ coins .
Find the largest possible value of $n$ and prove your conclusion .
