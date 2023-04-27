import type { PropsWithChildren } from 'react';
import { SfButton, SfIconExpandMore, SfIconShoppingCart } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { Footer, BottomNav, ScrollToTopButton, NavbarTop, Search } from '~/components';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  const { t } = useTranslation();
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
    },
  ];
  return (
    <>
      <NavbarTop filled>
        <SfButton
          className="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex"
          type="button"
          slotSuffix={<SfIconExpandMore />}
          variant="tertiary"
        >
          <span>{t('allProductsLinkText')}</span>
        </SfButton>
        <Search className="hidden md:block flex-1" />
        <nav className="hidden md:flex md:flex-row md:flex-nowrap">
          {actionItems.map((actionItem) => (
            <SfButton
              className="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              key={actionItem.ariaLabel}
              aria-label={actionItem.ariaLabel}
              variant="tertiary"
              slotPrefix={actionItem.icon}
              square
            >
              {actionItem.role === 'login' && <p className="hidden md:inline-flex">{t(actionItem.label)}</p>}
            </SfButton>
          ))}
        </nav>
      </NavbarTop>
      {/*<Breadcrumbs />*/}
      <main>{children}</main>
      <BottomNav />
      <ScrollToTopButton />
      <Footer className="mb-[58px] md:mb-0" />
      {/*<Notifications />*/}
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};