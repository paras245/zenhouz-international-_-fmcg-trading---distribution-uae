import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductCategoryPage } from './pages/ProductCategoryPage';
import { Solutions } from './pages/Solutions';
import { Markets } from './pages/Markets';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

/**
 * Validates the language route parameter. If invalid (not 'en' or 'ar'), renders NotFound.
 */
const LanguageRouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  if (lang !== 'en' && lang !== 'ar') {
    return <NotFound />;
  }
  return <>{children}</>;
};

/**
 * Root or direct path redirector to localized URL
 */
const RootRedirect: React.FC = () => {
  const { language } = useLanguage();
  return <Navigate to={`/${language}`} replace />;
};

/**
 * Helper to redirect non-prefixed paths like /about to /en/about or /ar/about
 */
const PathRedirect: React.FC<{ target: string }> = ({ target }) => {
  const { language } = useLanguage();
  return <Navigate to={`/${language}/${target}`} replace />;
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Root redirect to current language */}
            <Route path="/" element={<RootRedirect />} />

            {/* Non-prefixed fallback redirects */}
            <Route path="/about" element={<PathRedirect target="about" />} />
            <Route path="/products" element={<PathRedirect target="products" />} />
            <Route path="/products/:categorySlug" element={<PathRedirect target="products" />} />
            <Route path="/solutions" element={<PathRedirect target="solutions" />} />
            <Route path="/markets" element={<PathRedirect target="markets" />} />
            <Route path="/contact" element={<PathRedirect target="contact" />} />

            {/* Localized multi-page routes */}
            <Route
              path="/:lang"
              element={
                <LanguageRouteGuard>
                  <RootLayout />
                </LanguageRouteGuard>
              }
            >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:categorySlug" element={<ProductCategoryPage />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="markets" element={<Markets />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Global catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
