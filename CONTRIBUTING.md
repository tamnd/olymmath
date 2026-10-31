# Contributing to olymmath

Thank you for your help. This file tells you how to add or change a problem.

## What you can contribute

1. A missing problem from an official paper.
2. A correction to a statement, an answer or a source.
3. A solution that you wrote.
4. A report of an error.

## Add a problem

1. Make a branch from `main`.
2. Find the edition file `editions/<competition>/<year>.yaml`. If it does not exist, add it. The competition must be in `registers/competitions.yaml`.
3. Add the file `problems/<competition>/<year>/<position>.md`. Copy the front matter of a problem of the same competition.
4. Copy the statement from the official paper. Do not change the words. Write the mathematics in TeX between `$` signs. Put display mathematics between `$$` signs on its own line.
5. Write each paragraph on one line. Do not break a sentence across lines.
6. Give the source: the name of the paper, the URL and the page.
7. Run `om check -content .`. It must report 0 findings.
8. Open a pull request.

## Rules for text

- Write in plain English. Use short sentences and the active voice.
- Do not use a model to write or to translate a statement.
- An answer is a fact. Write it in a short form, for example `$n = 3$.`

## Sign your commits

Add a `Signed-off-by` line to each commit (`git commit -s`). The line says that you agree to the [Developer Certificate of Origin](https://developercertificate.org/).
