import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ENDPOINTS } from './utils';
import { Spinner } from 'components/common';

// Lazy loaded pages.
const Pages = {
  Landing: lazy(() => import('pages/Landing')),
};

const AppRouter = () => {
  // Load config when origin changes.
  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINTS.CONFIG);
      const configuration = await response.json();
      (window as Window).configuration = configuration;
    })();
  }, [window.location.origin]);

  return (
    <>
      <Router>
        <Routes>
          {/* LANDING PAGE */}
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Pages.Landing />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
