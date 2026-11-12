---
tag: MKMKJHXY6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya uses six-character passwords for his internet work. Fearing hackers, he decided to change the order of characters in each password using the same rule, which he wrote in a notebook. The rule could look like this: $\left(\begin{array}{llllll}1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 6 & 4 & 5 & 1 & 2\end{array}\right)$. That is, the first character is moved to the third position, the second to the sixth, and so on. In his email password, Petya rearranged the letters according to the rule in the notebook, and then, for added security, rearranged the letters again using the same rule. (If using the rule from the example, "qwerty" would become "tyqerw" after the first rearrangement, and "rwtqey" after the second). Which of the following combinations could have been obtained by double rearrangement of the letters in the password "qwerty" (using, possibly, other rules of the specified type):

a) | yetrqw | eyrtqw | yrwteq | rewqyt | qwtyre | tywreq |
| :--- | :--- | :--- | :--- | :--- | :--- |

b) Petya lost his notebook! He remembers that the original password was "qwerty," but he doesn't remember the rule by which the letters were rearranged twice. What is the minimum number of attempts needed to guarantee finding the lost password?
