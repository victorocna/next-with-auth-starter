#!/bin/bash

mkdir -p ./components/Query
cd ./components/Query
touch index.js

printf "import React from 'react';
import { useQuery } from '../../hooks';
import { $1Error, $1Loading, $1Success } from '.';

const $1 = () => {
  const { data, status } = useQuery();

  return (
    <>
      {status === 'success' && <$1Success {...data} />}
      {status === 'loading' && <$1Loading />}
      {status === 'error' && <$1Error />}
    </>
  );
};

export default $1;" >> $1.jsx

printf "import React from 'react'

const $1Error = () => {
  return (
    <div>

    </div>
  )
};

export default $1Error;" >> $1Error.jsx

printf "import React from 'react'

const $1Loading = () => {
  return (
    <div>

    </div>
  )
};

export default $1Loading;" >> $1Loading.jsx

printf "import React from 'react'

const $1Success = () => {
  return (
    <div>

    </div>
  )
};

export default $1Success;" >> $1Success.jsx

if [ -s index.js ]
then
sed -i 's/{ /{\n\t/g; s/, /,\n\t/g; s/ };/,\n};/g;' index.js
grep ',' index.js > exports.txt
printf "  $1,
  $1Error,
  $1Loading,
  $1Success," >> exports.txt
sort -o exports.txt exports.txt
grep 'import' index.js > imports.txt
printf "import $1 from './$1';
import $1Error from './$1Error';
import $1Loading from './$1Loading';
import $1Success from './$1Success';" >> imports.txt
sort -o imports.txt imports.txt
cp imports.txt index.js
printf "
export {
" >> index.js
cat exports.txt >> index.js
printf "};" >> index.js
rm -f imports.txt exports.txt
else
printf "import $1 from './$1';
import $1Error from './$1Error';
import $1Loading from './$1Loading';
import $1Success from './$1Success';

export {
  $1,
  $1Error,
  $1Loading,
  $1Success,
};" >> index.js
fi

